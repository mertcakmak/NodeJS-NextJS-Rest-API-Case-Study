"use strict";
const waterfall = require('async-waterfall');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
exports.search  = (req, res)=>{
    const rs = {total:0, pagination:{} , data:[],error:null};
    const keyword = req.query.keyword || '';
    const page = req.query.page || 1;
    const startingPage = (page*2)-1;

    res.status(200);

    if(keyword===''){
        rs.error = 'missing keyword'
        res.status(422).send(rs);
    }

    let data = []
    waterfall([
        (cb)=>{
            axios({ method:'get', url:`${process.env.API_URL}&s=${keyword}&page=${startingPage}` })
            .then((response)=>{
                if(response.data.Response==='True'){
                    data = data.concat(response.data.Search);
                    cb(null, data);
                } else {
                    cb(response.data.Error, null);
                }
            })
            .catch((error)=>{
                res.status(error.response.status)
                cb(error.message, null);
            })
        },
        (data, cb)=>{
            console.log('BBBBB');
            axios({ method:'get', url:`${process.env.API_URL}&s=${keyword}&page=${startingPage+1}` })
            .then((response)=>{
                if(response.data.Response==='True'){
                    data = data.concat(response.data.Search);
                    cb(null, data, response.data.totalResults);
                } else {
                    cb(response.data.Error, null);
                }
            })
            .catch((error)=>{
                res.status(error.response.status)
                cb(error.message);
            })
        },
        (data,totalResults,cb)=>{
            const items = data.length || 0;
            const currentPage = page;
            const pageCount = Math.ceil(parseInt(totalResults)/20);
            const prevPage = page-1 > 0 ? page-1 : page;
            const nextPage = page+1 > pageCount ? pageCount : page+1;

            rs.total = parseInt(totalResults);
            rs.pagination.items = items;
            rs.pagination.currentPage = currentPage;
            rs.pagination.nextPage = nextPage;
            rs.pagination.prevPage = prevPage;
            rs.pagination.pageCount = pageCount;

            cb(null, data);
        }
    ],(e,data)=>{
        rs.error = e;
        rs.data = data;
        res.send(rs);
    })
}