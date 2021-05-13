<script>
    import { projectsKV, projects } from '$lib/store/projects'
    import { page } from '$app/stores';
    import Datepicker from 'svelte-calendar';
    let selectedDate, userHasChosenDate
    $: console.log('selectedDate', selectedDate, 'userHasChosenDate',userHasChosenDate)
    let project = {}
    $: if ($page?.params?.construction_id && $projectsKV)
        project = $projectsKV[ $page.params.construction_id ] || {}
</script>
<div class="container">
    <div class="d-flex flex-row">
        <strong style="flex:1">{project?.name}</strong>
        <div>
            <Datepicker
                bind:selected={selectedDate}
                bind:dateChosen={userHasChosenDate}
            />
        </div>

    </div>    
</div>
<slot></slot>
