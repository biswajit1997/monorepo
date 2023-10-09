<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Comments;
use App\User;
use Notification;
use App\Notifications\Comment;



class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Post::latest()->get();
        foreach($data as $item){
            $set[] = $item->tags->tagname;
        }
        $data1=[
            'data' => $data,
            
           
        ];

        return $data;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        
        $data =$request->post['option']; 
        $option_id =[];
        foreach($data as $item){
            $option_id[]=$item['id'];
        }
       
      
        
      $post = Post::create([
           'title' => $request->post['title'],
           'user_id' => $request->post['user_id'],
           'description' => $request->post['description'],
           'image' => $request->post['image'],
           'tags_id' => implode(" ",$option_id),
       ]);
       
       
    
      
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
       $data = Post::where('id',$request->id)->first();
       foreach($data as $item){
            $set[] = $data->tags->tagname;
        }
        $data1=[
            'data' => $data,  
        ];
       return $data;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function filter(Request $request)
    {
        $filter = Post::where('tags_id',$request->idd)->get();
        foreach($filter as $item){
            $set[] = $item->tags->tagname;
        }
        $data1=[
            'data' => $filter,
            
           
        ];

       
        
       if(count($filter)>0){
        return[
            'filter' =>$filter,
            'massage' => 'filter data success',
            'error' => false
        ];
       }else{
        return[
          
            'massage' => 'No filter data show',
            'error' => true
        ];
       }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
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
