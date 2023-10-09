<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        
            
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function login(Request $request)
    {
        
        if($request){
            
            $login = User::where([
                'email' => $request->email,
                'password' => md5($request->password)
            ])->first();

            if(isset($login) > 0){
                return[
                    'data' => $login,
                    'token' =>md5($login->id),
                    'massage' => 'Login Successfully',
                    'error' => false,
                    'status'=> 200
                ];
            }else{
                return[
                    'massage' => 'Login failed',
                    'error' => true,
                    'status'=> 405
                ];
            }
            
        }else{
            return[
                'massege' => "request not found",
                'error'    => true
            ];
        }  
            
    }

    public function create(Request $request)
    {
       
        if($request){
            $userData = User::create([
                'name'  => $request->name,
                'email' => $request->email,
                'password' =>md5($request->password)
            ]);
            if(isset($userData) >0){
                return[
                    'massege' => "Register Successfully",
                    'error'    => false
                ];
            }else{
                return[
                    'massege' => "Register Unsccessfully",
                    'error'    => false
                ];
            }
            
        }else{
            return[
                'massege' => "request not found",
                'error'    => true
            ];
        }  
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        // return $request;
        $userPay = User::find($request->id);
        return $userPay->payment_status;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
       User::where('id',$request->id)->update(['payment_status' =>'active']);
       return 'status active';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
