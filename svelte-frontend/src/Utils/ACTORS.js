import SubscribeFormMonitor from "../components/Auth/Subscribe/SubscribeFormMonitor.svelte";
import SubscribeFormSupervisor from "../components/Auth/Subscribe/SubscribeFormSupervisor.svelte";
import SubscribeFormStudent from "../components/Auth/Subscribe/SubscribeFormStudent.svelte";

export default [
    {
        key: "student",
        name: "Étudiant",
        subscribeForm: SubscribeFormStudent
    },
    {
        key: "supervisor",
        name: "Superviseur",
        subscribeForm: SubscribeFormSupervisor
    },
    {
        key: "monitor",
        name: "Moniteur",
        subscribeForm: SubscribeFormMonitor
    }
]