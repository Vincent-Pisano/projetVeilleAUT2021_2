import SubscribeFormMonitor from "../components/Auth/Subscribe/SubscribeFormMonitor.vue";
import SubscribeFormSupervisor from "../components/Auth/Subscribe/SubscribeFormSupervisor.vue";
import SubscribeFormStudent from "../components/Auth/Subscribe/SubscribeFormStudent.vue";

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