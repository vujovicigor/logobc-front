<script>
    import { page } from '$app/stores';
    let pagename
    $: if ($page && $page.path){
//        pagename = $page.path.split('/').pop()
        pagename = $page.path.split('/')[5]
    }    
</script>
<div class="container">
    <ul class="nav nav-tabs nav-fill mb-2" style="font-size: 0.7rem!important;">
        <li class="nav-item">
        <a sveltekit:prefetch class:active={pagename == 'radnik'} class="nav-link" aria-current="page" href="/project/{$page.params.construction_id}/timesheet/ljudski/radnik">Ljudski resursi</a>
        </li>
        <li class="nav-item">
        <a sveltekit:prefetch class:active={pagename == 'tim'} class="nav-link" href="/project/{$page.params.construction_id}/timesheet/ljudski/tim">Tim</a>
        </li>
    </ul>
</div>  
<slot></slot>
<style>
    :global(.nav-link){
        padding:0.5rem !important;
    }
</style>