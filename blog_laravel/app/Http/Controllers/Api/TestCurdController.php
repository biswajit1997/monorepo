<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\TestCurd;

class TestCurdController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $allData = TestCurd::get();
        return $allData;
        // if($allData){
        //     return[
        //         'data' => $allData,
        //         'error' => false
        //     ];
        // }else{
        //     return[
                
        //         'error' => true
        //     ];
        // }
       

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
       $data = TestCurd::create([
            'name' => $request->name,
            'email'=> $request ->email,
            'mobile'=> $request->mobile
        ]);

        if($data){
            return[
                'massage'=>'created',
                'error' => false
            ];
        }else{
            return[
                'massage' => 'faield',
                'error' => true
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
        $res = TestCurd::where('id',$request->id)->first();
        if($res){
            return $res;
        }else{
            return[
                'massage' => 'faield',
                'error' => true
            ];
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
    
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
        
        $res = TestCurd::where('id',$request->id)->update($request->all());
        if($res){
            return[
                'massage'=>'updated',
                'error' => false
            ];
        }else{
            return[
                'massage' => 'faield',
                'error' => true
            ];
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $res = TestCurd::destroy($request->id);
        if($res){
            return[
                'massage'=>'deleted',
                'error' => false
            ];
        }else{
            return[
                'massage' => 'faield',
                'error' => true
            ];
        }
    }
}
