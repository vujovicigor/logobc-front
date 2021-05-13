<script>
  import { page } from '$app/stores';
  $:console.log('page', $page.path)

</script>

<ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class:active={$page.path == '/resursi'} class="nav-link" aria-current="page" href="/resursi">Ljudski</a>
  </li>
  <li class="nav-item">
    <a class:active={$page.path == '/resursi/vozila'} class="nav-link" href="/resursi/vozila">Vozila</a>
  </li>
  <li class="nav-item">
    <a class:active={$page.path == '/masine'} class="nav-link" href="#">Masine</a>
  </li>
  <li class="nav-item">
    <a class:active={$page.path == '/resursi'} class="nav-link" href="#" tabindex="-1" aria-disabled="true">Materijal</a>
  </li>
</ul>
  <slot></slot>