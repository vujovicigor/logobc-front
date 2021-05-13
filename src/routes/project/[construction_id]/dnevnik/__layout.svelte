<script>
    import { page } from '$app/stores';
</script>
<div class="container">
    <ul class="nav nav-pills nav-fill mb-2">
        <li class="nav-item">
        <a class:active={$page.params.smena == '1'} class="nav-link" aria-current="page" href="/project/{$page.params.construction_id}/dnevnik/1">Smena 1</a>
        </li>
        <li class="nav-item">
        <a class:active={$page.params.smena == '2'} class="nav-link" href="/project/{$page.params.construction_id}/dnevnik/2">Smena 2</a>
        </li>
        <li class="nav-item">
        <a class:active={$page.params.smena == '3'} class="nav-link" href="/project/{$page.params.construction_id}/dnevnik/3">Smena 3</a>
        </li>
    </ul>
</div>  
<slot></slot>