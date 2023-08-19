export default function DashboardHome(){
    return(
        <div>
            <h1>Hypertension CRF Report</h1>
        <nav>
<div class="nav nav-tabs" id="nav-tab" role="tablist">

<button class="nav-link active" id="nav-home-tab" data-toggle="tab" data-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">First visit</button>
<button class="nav-link" id="nav-profile-tab" data-toggle="tab" data-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Follow Up visit</button>
<button class="nav-link" id="nav-contact-tab" data-toggle="tab" data-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Follow Up visit 2</button>
</div>
</nav>
<div class="tab-content" id="nav-tabContent">
<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
<div className="container-fluid">
<div className="row">
<div className="col-md-3">
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Demographic Data
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">Age</li>
<li class="list-group-item">Gender</li>
<li class="list-group-item">Urban/Rural</li>
<li class="list-group-item">Socio Economic Status</li>
</ul>
</div>
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Comorbidities
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">Comorbidities</li>

</ul>
</div>

</div>
<div className="col-md-3">
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Personal History
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">Diet</li>
<li class="list-group-item">Alcohol</li>
<li class="list-group-item">Smoking</li>
<li class="list-group-item">Sleep Apnea</li>
<li class="list-group-item">Erectile Dysfunction</li>
<li class="list-group-item">Excercise</li>
<li class="list-group-item">Use of Computer</li>
<li class="list-group-item">Use of Smart Phones</li>
</ul>
</div>


</div>
<div className="col-md-3">
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Physical Examination
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">Height</li>
<li class="list-group-item">Weight</li>
<li class="list-group-item">Obesity</li>

</ul>
</div>
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Investigations
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">Investigations</li>

</ul>
</div>

</div>
<div className="col-md-3">
<div class="card" style={{width:"18rem"}}>
<div class="card-header">
Diagnosis
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">New Diagonised</li>
<li class="list-group-item">Known Case</li>
<li class="list-group-item">Refractory</li>
<li class="list-group-item">Compilance</li>
<li class="list-group-item">Goal Reached?</li>
<li class="list-group-item">A third item</li>
</ul>
</div>
</div>
</div>
<h1>Dyslipidemia CRF Report</h1>
<div className="row">
<div className="col-md-3">
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">A third item</li>
</ul>
</div>
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>

</ul>
</div>

</div>
<div className="col-md-3">
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">A third item</li>
</ul>
</div>


</div>
<div className="col-md-3">
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>

</ul>
</div>
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>

</ul>
</div>

</div>
<div className="col-md-3">
<div class="card" style={{width:"18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
</ul>
</div>
</div>
</div>
<h1>Interesting Case Report</h1>
<div className="row">
<div className="col-md-3">
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">A third item</li>
</ul>
</div>
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>

</ul>
</div>

</div>
<div className="col-md-3">
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">A third item</li>
</ul>
</div>


</div>
<div className="col-md-3">
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>

</ul>
</div>
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>

</ul>
</div>

</div>
<div className="col-md-3">
<div class="card" style={{width:"18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
</ul>
</div>
</div>
</div>
<h1>BP Camp Report</h1>
<div className="row">
<div className="col-md-3">
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">A third item</li>
</ul>
</div>
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>

</ul>
</div>

</div>
<div className="col-md-3">
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">A third item</li>
</ul>
</div>


</div>
<div className="col-md-3">
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>

</ul>
</div>
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>

</ul>
</div>

</div>
<div className="col-md-3">
<div class="card" style={{width:"18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
</ul>
</div>
</div>
</div>
<h1>Lipid Camp Report</h1>
<div className="row">
<div className="col-md-3">
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">A third item</li>
</ul>
</div>
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>

</ul>
</div>

</div>
<div className="col-md-3">
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">A third item</li>
</ul>
</div>


</div>
<div className="col-md-3">
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>

</ul>
</div>
<div class="card" style={{width: "18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>

</ul>
</div>

</div>
<div className="col-md-3">
<div class="card" style={{width:"18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
</ul>
</div>
</div>
</div>

</div>
</div>
<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
<div class="card" style={{width:"18rem"}}>
<div class="card-header">
Featured
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
</ul>
</div>
</div>
<div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">amma
</div>
</div>
       </div>
    );
}