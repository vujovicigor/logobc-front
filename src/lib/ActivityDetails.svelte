<script>
    export let activity
    export let group
    export let object
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
<div class="progress">
    <div class="progress-bar bg-success" role="progressbar" style="width: {activity.installed_percent}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>    


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