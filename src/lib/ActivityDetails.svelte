<script>
    import { fetch2 } from '$lib/fetch2.js';
    export let activity
    export let group
    export let object
    let installed_quantity_for_selected_date 
    let loading = false
    /// tracking_installed_quantity_insert?installed_date=2021-05-13
    async function saveIzvedenaKolicina(){
        loading = true
        let d = new Date()
        
        let obj = {...activity, installed_quantity_for_selected_date, installed_date:d.toISOString().substr(0,10)}
        let [resp, err] = await fetch2('post', 'tracking_installed_quantity_insert', obj)
        loading = false
        if (resp) activity = resp.results
    }
</script>
<button id="back" on:click
class="">
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>
</button>

<div>
    {group.code}
    {group.label}
</div>
<div>
    {activity.code}
    {activity.label}
</div>
contract_unit_price: {activity.contract_unit_price}<br>
contract_unit_price_total: {activity.contract_unit_price_total}<br>
JM: {activity.unit_label}<br>
quantity: {activity.quantity}<br>
Installed percent {activity.installed_percent}%
<div class="progress mb-3">
    <div class="progress-bar bg-success" role="progressbar" style="width: {activity.installed_percent}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>    


<div class="row mb-3">
    <div class="col">
        <div class="text-success">Realizovano</div>
        <strong>{activity.installed_quantity}</strong>
    </div>
    <div class="col">
        <div class="text-success">Ukupno</div>
        <strong>{activity.quantity}</strong>
    </div>
    <div class="col">
        <div class="text-success">J.m.</div>
        <strong>{activity.unit_label}</strong>
    </div>
</div>


<div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Izvedena količina</label>
    <input type="numeric" class="form-control" id="exampleFormControlInput1" bind:value={installed_quantity_for_selected_date}>
</div>
<button disabled={loading} on:click={saveIzvedenaKolicina} class="btn btn-primary mb-3">Sačuvaj</button>
<style>
    #back {
        position:fixed;
        z-index: 2222;
        color: rgba(0,0,0,.55);
        border-color: rgba(0,0,0,.1);
        left: var(--bs-gutter-x,.75rem);
        top: 0.5rem;

        padding: .25rem .75rem;
        font-size: 1.25rem;
        line-height: 1;
        border: 1px solid transparent;
        border-radius: .25rem;        
        background-color: white !important;
    }
</style>