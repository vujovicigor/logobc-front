<script>
    import { fetch2 } from '$lib/fetch2.js';
    import { page } from '$app/stores';
    import ActivityDetails from '$lib/ActivityDetails.svelte'

    let showActivityDetails = false
    let costs = []
    let costGet = async function(){
        let [resp, err] = await fetch2('get', 'cost_get', {construction_id:$page.params.construction_id})
        if (resp) costs = resp.results
        console.log('costGet', costs)
    } 
    costGet()   

    function showActivity(){
        showActivityDetails=true
    }
</script>
{#if showActivityDetails}
    <ActivityDetails on:click={()=>{showActivityDetails=false}}/>    
{/if}

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
                            <li class="list-group-item" on:click={()=>{showActivity(activity)}}>
                                <span>{activity.code} </span>{activity.label}
                            </li>
                        {/each}
                    </ul>
        
                </li>
            {/each}
            </ul>
            
        </div>
      </div>
    </div>
{/each}
</div>