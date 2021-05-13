<script>
    import { goto } from '$app/navigation';
    import { navigating, page } from '$app/stores';
    import { projects } from '$lib/store/projects'
    import { session as sessionStore} from '$lib/store/session.js'
    import { browser } from '$app/env'

    let collapsed = true
    $: if ($page || $navigating) collapsed = true
    $: if (browser && !$sessionStore.isLogedIn) {
        goto('/login')
    }
</script>

<nav class="navbar fixed-top navbar-light bg-lightDUMMY" style="background-color: white !important; z-index: 1">
    <div class="container-fluid">
      <button on:click="{()=>{collapsed=!collapsed}}" class:collapsed class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="/">
        <img src="/images/logo-logo.png" alt="logo" height="30">
      </a>
      <a class="navbar-brand" href="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
        </svg>
      </a>
      <div style="overflow: auto; height: 100vh;" class:show={!collapsed} class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link" href="/"><strong>Projekti</strong></a>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ps-3">
                    {#each $projects as project}
                    <li class="nav-item">
                        <a class:active={$page.params.construction_id==project.construction_id} class="nav-link" aria-current="page" href="/project/{project.construction_id}/pracenje">
                            {project.name}
                        </a>
                    </li>
                    {/each}
                </ul>                
            </li>

            {#if $sessionStore.isLogedIn}
                <li class="nav-item">
                    <a on:click={()=>{$sessionStore.isLogedIn=false}} class="nav-link" aria-current="page" href="#">Logout</a>
                </li>
            {:else}
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="/login">Login</a>
                </li>
            {/if}                          
        </ul>
      </div>
    </div>
</nav>
<slot></slot>
