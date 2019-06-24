<?php

namespace App\Http\Controllers\api\admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

use App\User;
class AuthController extends Controller
{

    public function __construct()
    {
        $this->_model = new User;
    }
	public function login(Request $request)
	{
		$input = $request->all();
        
        /*
        $this->_model->find(1)->fill([
            'password' => Hash::make('admin')
        ])->save();
        return array();*/
        

        $input = $request->only(['email', 'password']);
        $validation = Validator::make($input, [
                'password' => 'required|min:2',
                'email' => 'required|email', // unique:users
        ]);
        if ($validation->fails()) {
            $errorString = implode(",",$validation->messages()->all());
            $res = array(
                "status"=>"400",
                "error"=>true,
                "msg"=>$errorString,
                'data'=>$validation->errors(),
            );
            return $res;
        }

        // $input = array('email'=>'redaksi.jacatra@gmail.com','password'=>'admin');
		$data = $this->_model->where('email',$input['email'])->first();
        
        if(!isset($data->email)){
            $res = array(
                "status"=>"400",
                "error"=>true,
                "msg"=>'email not found',
                'data'=>$data,
            );
            return $res;
        }
        if(!Hash::check($input['password'], $data->password)){
            $res = array(
                "status"=>"400",
                "error"=>true,
                "msg"=>'email or password not match',
                'data'=>array(),
            );
            return $res;
        }

        $data->last_login = date("Y-m-d H:i:s");
        $data->token = Str::random(60);

        $res = array(
            "status"=>"200",
            "error"=>false,
            "msg"=>'success',
            'data'=>$data,
        );

		return $res;
	}
}
