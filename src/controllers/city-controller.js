 const { response } = require("express");
const {CityService} = require("../services/index");

 const cityService = new CityService();

 // path -> /city -> req.body
 const create =  async (resq, res) =>{
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "City created successfully",
            error: {}
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "City creation failed",
            error: error
        })
    }
 }

 // path -> /city/:id ->req.params
 const destroy = async(resq, res) =>{
    try {
        const city = await cityService.deleteCity(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "City deleted successfully",
            error: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete city",
            error: error
        })
    }
 }

 //path -> /city/:id ->req.params
 const get =  async (resq, res) =>{
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(201).json({
            data: city,
            success: true,
            message: "successfully fetched city",
            error: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get city",
            error: error
        })
    }
 }

 // path -> /city/:id ->req.body
 const update = async (resq, res) =>{
    try {
        const city = await cityService.updateCity(req.params.id,req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "successfully fetched city",
            error: {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update city",
            error: error
        })
    }
 }

 module.exports = {
    create,
    destroy,
    update,
    get
 }