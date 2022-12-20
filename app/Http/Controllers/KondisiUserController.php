<?php

namespace App\Http\Controllers;

use App\Models\KondisiUser;
use App\Http\Requests\StoreKondisiUserRequest;
use App\Http\Requests\UpdateKondisiUserRequest;

class KondisiUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Http\Requests\StoreKondisiUserRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreKondisiUserRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\KondisiUser  $kondisiUser
     * @return \Illuminate\Http\Response
     */
    public function show(KondisiUser $kondisiUser)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\KondisiUser  $kondisiUser
     * @return \Illuminate\Http\Response
     */
    public function edit(KondisiUser $kondisiUser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateKondisiUserRequest  $request
     * @param  \App\Models\KondisiUser  $kondisiUser
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateKondisiUserRequest $request, KondisiUser $kondisiUser)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\KondisiUser  $kondisiUser
     * @return \Illuminate\Http\Response
     */
    public function destroy(KondisiUser $kondisiUser)
    {
        //
    }
}
