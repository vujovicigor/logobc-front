<script>
    import { page } from '$app/stores';
    let pagename
    $: if ($page && $page.path){
        pagename = $page.path.split('/').pop()
    }    
</script>
<div class="container">
    <ul class="nav nav-pills nav-fill mb-2">
        <li class="nav-item">
        <a class:active={pagename == 'ljudski'} class="nav-link" aria-current="page" href="/project/{$page.params.construction_id}/timesheet/ljudski">Ljudski</a>
        </li>
        <li class="nav-item">
        <a class:active={pagename == 'vozila'} class="nav-link" href="/project/{$page.params.construction_id}/timesheet/vozila">Vozila</a>
        </li>
        <li class="nav-item">
        <a class:active={pagename == 'masine'} class="nav-link" href="/project/{$page.params.construction_id}/timesheet/masine">Masine</a>
        </li>
        <li class="nav-item">
        <a class:active={pagename == 'materijal'} class="nav-link" href="/project/{$page.params.construction_id}/timesheet/materijal" >Materijal</a>
        </li>
    </ul>
</div>  
<slot></slot>