<script>
    import { goto } from '$app/navigation';
    import { getStores, navigating, page } from '$app/stores';
    import { projects } from '$lib/store/projects'
    import { session as sessionStore} from '$lib/store/session.js'
    import { browser } from '$app/env'
    import construction_id from '$lib/store/construction_id'

    let collapsed = true
    $: if ($page || $navigating) collapsed = true
    $: if (browser && !$sessionStore.isLogedIn) {
        goto('/login')
    }
   // path: "/resursi/"

</script>

<nav class="navbar  fixed-top navbar-light bg-light">
    <div class="container-fluid">
      <button on:click="{()=>{collapsed=!collapsed}}" class:collapsed class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="/">
        <img src="https://picsum.photos/30" alt="" width="30" height="24">
      </a>
      <a class="navbar-brand" href="/">
        <img src="https://picsum.photos/40" alt="" width="30" height="24">
      </a>
      <div class:show={!collapsed} class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {#if $sessionStore.isLogedIn}
                <li class="nav-item">
                    <a on:click={()=>{$sessionStore.isLogedIn=false}} class="nav-link active" aria-current="page" href="#">Logout</a>
                </li>
            {:else}
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/login">Login</a>
                </li>
            {/if}
                        
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/resursi">Resursi</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/resursi">Projekti</a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ps-3">
                    {#each $projects as project}
                    <li class="nav-item">
                        <a class:active={$construction_id==project.construction_id} class="nav-link" aria-current="page" href="/project/{project.construction_id}">{project.name}</a>
                    </li>
                    {/each}
                </ul>                
            </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
</nav>
<slot></slot>
