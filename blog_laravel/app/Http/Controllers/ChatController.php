<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ChatController extends Controller
{
    public function chat(Request $request)
{
    try {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . config('services.openai.api_key'),
        ])->post('https://api.openai.com/v1/engines/davinci-codex/completions', [
            'prompt' => $request->input('message'),
            'temperature' => 0.7,
            'max_tokens' => 150,
        ]);

        $chatResponse = $response->json()['choices'][0]['text'] ?? 'Sorry, I could not understand that.';

        return response()->json(['message' => $chatResponse]);
    } catch (\Exception $e) {
        // Handle API request errors
        return response()->json(['error' => $e->getMessage()], 500);
    }
}
}
