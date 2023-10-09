<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Comments;
use App\User;
use Notification;
use App\Notifications\Comment;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function blogcomment(Request $request)
    {
      
       
        $comments = Comments::where('post_id',$request->id)->latest()->get();
        return $comments;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        
                
            $user = User::where('id',$request['saveData']['user_id'])->get();
           
           
            $comment =Comments::create([
                        'post_id' => $request['saveData']['post_id']['id'],
                        'user_name'=>$request['saveData']['username'],
                        'comment' =>$request['saveData']['comment']
                    ]);
                    $details = [
                        'greeting' => $request['saveData']['username'],
                        'body' => $request['saveData']['title'],
                        'thanks' => 'Thank you for comments!',
                        ];
                        Notification::send($user, new Comment($details));
                       

                        // $user->notify(new Comment($details));


                    if(isset($comment) >0){
                        return[
                            'comment_Data' => $comment,
                            'massage' => 'successfully comment post',
                            'error' => false
                        ];
                    }else{
                        return[
                            'massage' => 'Comment Faield',
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
    public function show($id)
    {
        //
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
