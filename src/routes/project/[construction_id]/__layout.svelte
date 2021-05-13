<script>
    import { page } from '$app/stores';
    $:console.log('page', $page)
    let pagename
    $: if ($page && $page.path){
        let arr = $page.path.split('/')
        pagename = (arr.length==4) ? arr.pop(): arr[arr.length-2]
        console.log('pagename',pagename)
    }
        
</script>
  
<slot></slot>

<div class="container">
    <ul class="nav nav-pills nav-fill mt-2 container">
        <li class="nav-item">
            <a class:active={pagename == 'timesheet'} class="nav-link" aria-current="page" href="/project/{$page.params.construction_id}/timesheet/ljudski">Timesheet</a>
        </li>
        <li class="nav-item">
            <a class:active={pagename == 'pracenje'} class="nav-link" href="/project/{$page.params.construction_id}/pracenje">Pracenje</a>
        </li>
        <li class="nav-item">
            <a class:active={pagename == 'dnevnik'} class="nav-link" href="/project/{$page.params.construction_id}/dnevnik/1">Dnevnik</a>
        </li>
    </ul>    
</div>