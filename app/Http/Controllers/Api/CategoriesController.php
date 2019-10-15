<?php

namespace App\Http\Controllers\Api;

use App\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // get all categories
        $categories = Category::orderBy('id', 'desc')->get();
        return response()->json(['status' => 'success', 'data' => $categories], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $this->validateRequest($request);

            $category = Category::create([
                'name' => $request->category
            ]);
            return response()->json(['status' => 'success', 'category' => $category], 200);

        } catch (\Exception $ex) {
            return response()->json(['status' => 'error', 'message' => $ex->getMessage()()], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        try {
            $category->update([
                'active' => !$category->active
            ]);
            return response()->json(['status' => 'success', 'category' => $category], 200);
        } catch (\Exception $ex) {
            return response()->json(['status' => 'error', 'message' => $ex->getMessage()], 200);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        try {
            $category->delete();
            return response()->json(['status' => 'success', 'data' => 'deleted'], 200);
        } catch (\Exception $ex) {
            return response()->json(['status' => 'error', 'message' => $ex->getMessage()], 200);
        }
    }

    private function validateRequest($request)
    {
        return $request->validate([
            'category' => 'required|string|min:5'
        ]);
    }
}
