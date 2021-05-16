<script>
    import { fetch2 } from '$lib/fetch2.js';
    import { page } from '$app/stores';
    import selectedDate from '$lib/store/selectedDate.js'
    import Loader from '$lib/Loader.svelte'

    let selected_member_ix = 0 
    let loading = false
    let ljudi = []
    let ljudiGet = async function(){
        loading = true
        let [resp, err] = await fetch2('get', 'timesheet_machine_get', {selected_date:$selectedDate.toISOString(), construction_id:$page.params.construction_id})
        loading = false
        if (resp) {
            selected_member_ix = 0 
            ljudi = resp.results
        }
    } 
    $: if ($page && $page.params && $page.params.construction_id && $selectedDate) {
        ljudi = []
        ljudiGet()
    }
</script>
<div class="container" style="flex: 1; overflow: auto;">
{#if loading}
    <Loader/>
{:else}
  {#if ljudi && ljudi.length}
    <select bind:value={selected_member_ix} class="form-select">
		{#each ljudi as cova, ix}
			<option value={ix}>
				{cova.vehicle_registracija} - {cova.vehicle_marka}
			</option>
		{/each}    
    </select>

    <div class="row mb-3">
        <div class="col">
            <div class="text-success">Sati</div>
            <strong>{(ljudi && ljudi[selected_member_ix]) ? ljudi[selected_member_ix].regular_hours : ''}</strong>
        </div>
        <div class="col">
            <div class="text-success">Prekovremeni</div>
            <strong>{(ljudi && ljudi[selected_member_ix]) ? ljudi[selected_member_ix].overtime_hours : ''}</strong>
        </div>
    </div>

    <hr>
    <div class="row mb-3">
        <div class="col d-flex">
            <div class="text-success" style="flex: 1;">Sati total</div>
            <div class="text-success">
                <strong>
                    {(ljudi && ljudi[selected_member_ix]) ? ljudi[selected_member_ix].total_hours : ''}
                </strong>
            </div>
        </div>

    </div>
  {:else}
      <div class="text-center">
        <span>No data</span>
    </div>  
  {/if}
    
{/if}    
</div>
