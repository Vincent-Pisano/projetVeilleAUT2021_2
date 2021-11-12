<script>
    import CVButtonDownload from "./Button/CVButtonDownload.svelte";
    import CVButtonDelete from "./Button/CVButtonDelete.svelte";
    import CVButtonActive from "./Button/CVButtonActive.svelte";
    export let cv;

    let document = cv.pdfdocument
</script>

<tr>
    <td>{document.name}</td>
    <td>
        <CVButtonDownload {cv}/>
    </td>
    <td>
        <CVButtonDelete {cv}/>
    </td>
    <td>
        <CVButtonActive {cv}/>
    </td>
    <td>ICON</td>
</tr>

<style>
    
</style>