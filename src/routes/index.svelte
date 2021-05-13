<script>
    import { projects } from '$lib/store/projects'
    function formatDate(d){
        let options = {  year: 'numeric', month: 'long' };
        let date = new Date(d);
        return date.toLocaleString('sr-Latn', options)
    }
</script>
<div class="container" style="max-width:400px !important">
    {#each $projects as project}
        <div class="card mb-4 border-0" >
            <a href="/project/{project.construction_id}" class="stretched-link">
                <img src="{project.image?project.image:'https://bzvz.buildcon.org/assets/img/icons/project.svg'}" class="card-img-top" alt="{project.name}">
            </a>            
            <div class="card-body">
                <h5 class="card-title">{project.name}</h5>
                <p class="card-text">
                    Start: <span style="text-transform: capitalize;">{formatDate(project.start_date)}</span>
                    / Finish: <span style="text-transform: capitalize;">{formatDate(project.end_date)}</span>
                </p>
            </div>    
        </div>    
    {/each}


    
</div>    