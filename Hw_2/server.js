var express=require("express");
var cors= require("cors");
var app=express();
const router=express.Router()

app.use(express.json());
app.use(cors({
    origin:"*"
}))

app.listen(3000,() =>{
    console.log("Server run on port 3000")
});

//Get all
router.get("/patient",(req,res)=>{
    res.json(patients)
})

//Get by
router.get("/patient/:id",(req,res)=>{
    const patient=patients.find(p=>p.id ==req.params.id)
    res.json(patients)
})

//Post OK
router.post("/patient", (req,res)=>{
    const newPatient = req.body;
    patients.push(newPatient);
    res.json(patients)
})

//Update
router.put("/patient/:id", (req, res)=>{
    const patientIndex = patients.findIndex(p => p.id == req.params.id);
    if (patientIndex == -1) {
        res.status(404).json({ message: 'Patient not found.' });
        } 
    else {
        const updatedPatient = Object.assign({}, patients[patientIndex], req.body);
        patients[patientIndex] = updatedPatient;
        res.json(updatedPatient);
        }    
})

//Delete 
router.delete("/patient/:id",(req,res)=>{
    patients =patients.filter(p=>p.id !=req.params.id);
    res.json(patients)
})