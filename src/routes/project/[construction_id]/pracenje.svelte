<script>
    import { fetch2 } from '$lib/fetch2.js';
    import { page } from '$app/stores';
    import ActivityDetails from '$lib/ActivityDetails.svelte'
    import Loader from '$lib/Loader.svelte'
    
    let showActivityDetails = false
    let activity, group, object 
    let loading = false
    let costs = []
    let costGet = async function(){
        loading = true
        let [resp, err] = await fetch2('get', 'tracking_plan_list_get', {construction_id:$page.params.construction_id})
        loading = false
        if (resp) costs = resp.results
    } 
    $: if ($page && $page.params && $page.params.construction_id) {
        costs = []
        costGet()
    }

    function showActivity(a,g,o){
        activity = a
        group = g
        object = o
        showActivityDetails=true
    }
</script>
<div class="container" style="flex: 1; overflow: auto;">

{#if loading}
    <Loader/>
{:else}

    {#if showActivityDetails}
        <ActivityDetails {activity} {group} {object} on:click={()=>{showActivityDetails=false}}/>    
    {:else}
    <div class="accordion">
        {#each costs as object}
            <div class="accordion-item">
            <h2 class="accordion-header" >
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                {object.label}
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">

                    <ul class="list-group">
                    {#each object.group_list as group}
                        <li class="list-group-item"><strong>{group.code} {group.label}</strong>
                            
                            <ul class="list-group list-group-flush">
                                {#each group.activity_list as activity}
                                    <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-start" on:click={()=>{showActivity(activity, group, object)}}>
                                        <span>{activity.code} {activity.label}</span>
                                        <span class="badge bg-primary rounded-pill">{activity.installed_percent}%</span>
                                    </li>
                                {/each}
                            </ul>
                
                        </li>
                    {/each}
                    </ul>
                    
                </div>
            </div>
            </div>
            {:else}
            <div class="text-center">No data</div>
            {/each}
        </div>
    {/if}
{/if}

</div>    