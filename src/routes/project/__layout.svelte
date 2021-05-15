<script>
    import { projectsKV, projects } from '$lib/store/projects'
    import selectedDate from '$lib/store/selectedDate.js'
    import { page } from '$app/stores';
    import Datepicker from 'svelte-calendar';
    let daysOfWeek = [
        ['Nedelja', 'Ned'],
        ['Ponedeljak', 'Pon'],
        ['Utorak', 'Uto'],
        ['Sreda', 'Sre'],
        ['Četvrtak', 'Čet'],
        ['Petak', 'Pet'],
        ['Subota', 'Sub']
    ];

    let monthsOfYear = [
        ['Januar', 'Jan'],
        ['Februar', 'Feb'],
        ['Mart', 'Mar'],
        ['April', 'Apr'],
        ['Maj', 'Maj'],
        ['Jun', 'Jun'],
        ['Jul', 'Jul'],
        ['Avgust', 'Avg'],
        ['Septembar', 'Sep'],
        ['Oktobar', 'Oct'],
        ['Novembar', 'Nov'],
        ['Decembar', 'Dec']
    ];
    function formatDate(d){
        let options = {  year: 'numeric', month: 'long', day:'numeric'};
        let date = new Date(d);
        return date.toLocaleString('sr-Latn', options)
    }
    //let selectedDate, 
    //userHasChosenDate
    $: console.log('selectedDate', $selectedDate)
    let project = {}
    $: if ($page?.params?.construction_id && $projectsKV)
        project = $projectsKV[ $page.params.construction_id ] || {}
</script>
<div class="container">
    <div class="d-flex flex-row" style="align-items: center;">
        <strong style="flex:1">{project?.name}</strong>
        <div>
            <Datepicker
                bind:selected={$selectedDate}
                daysOfWeek={daysOfWeek}
                monthsOfYear={monthsOfYear}
                start={new Date((project?.start_date) || '2020-01-01')}
                end={new Date('2290-01-01')}
                format={date => formatDate(date)}
            />
        </div>

    </div>    
</div>
<slot></slot>
