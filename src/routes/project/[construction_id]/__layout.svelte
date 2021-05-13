<script>
    import { page } from '$app/stores';
    $:console.log('page', $page)
    let pagename
    $: if ($page && $page.path)
        pagename = $page.path.split('/').pop()
</script>

<slot></slot>
<ul class="nav nav-pills nav-fill">
    <li class="nav-item">
        <a class:active={pagename == 'timesheet'} class="nav-link" aria-current="page" href="/project/{$page.params.construction_id}/timesheet">Timesheet</a>
    </li>
    <li class="nav-item">
        <a class:active={pagename == 'pracenje'} class="nav-link" href="/project/{$page.params.construction_id}/pracenje">Pracenje</a>
    </li>
    <li class="nav-item">
        <a class:active={pagename == 'dnevnik'} class="nav-link" href="/project/{$page.params.construction_id}/dnevnik">Dnevnik</a>
    </li>
</ul>    