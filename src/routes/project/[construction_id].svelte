<script context="module">
	export function load({ page, fetch, session, context }) {
        console.log('Load!!!!')
        return {
            props: {
                construction_id: page.params.construction_id
            }
        };
	}
</script>

<script>
    import cstore from '$lib/store/construction_id.js'
    export let construction_id
    $: cstore.set(construction_id)		

</script>
opa: construction_id:{construction_id}
<br>
{$cstore}