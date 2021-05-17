<script>
    import { page } from '$app/stores';
    let pagename
    $: if ($page && $page.path){
        pagename = $page.path.split('/').pop()
    }    
</script>
<div class="container">
    <ul class="nav nav-tabs nav-fill mb-2" style="font-size: 0.7rem!important;">
        <li class="nav-item">
        <a sveltekit:prefetch class:active={pagename == 'ljudski'} class="nav-link" aria-current="page" href="/project/{$page.params.construction_id}/timesheet/ljudski">Ljudski resursi</a>
        </li>
        <li class="nav-item">
        <a sveltekit:prefetch class:active={pagename == 'vozila'} class="nav-link" href="/project/{$page.params.construction_id}/timesheet/vozila">Vozila</a>
        </li>
        <li class="nav-item">
        <a sveltekit:prefetch class:active={pagename == 'masine'} class="nav-link" href="/project/{$page.params.construction_id}/timesheet/masine">Masine</a>
        </li>
        <li class="nav-item">
        <a sveltekit:prefetch class:active={pagename == 'materijal'} class="nav-link" href="/project/{$page.params.construction_id}/timesheet/materijal" >Materijal</a>
        </li>
    </ul>
</div>  
<slot></slot>
<style>
    :global(.nav-link){
        padding:0.5rem !important;
    }
</style>