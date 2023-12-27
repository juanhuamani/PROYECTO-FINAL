const fs = require('fs');
const request = require('supertest');
const express = require('express');
const sidebar = require('../src/helpers/sidebar');

describe('Conteo general de la DB', ()=>{
    let ActualCommentsNumber = sidebar().comments;
    console.log(ActualCommentsNumber);
    test('Conteo de Comentarios', async ()=>{
        const response = await request('http://localhost:3000').get('/api/comments');
        expect(response.body.length).toBe(ActualCommentsNumber);
    });
});