import { createClient } from '@supabase/supabase-js'
import type { Database } from './supabase-types'
import { ref } from 'vue'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)


declare global {
    var supabase: any; // Remplacez 'any' par le type réel de 'supabase' si vous le connaissez
}

globalThis.supabase = supabase;


let user = ref(); // Déclarez user en dehors de la fonction afin que son état persiste

async function fetchUserData() {
    const { data } = await supabase.auth.getUser();
    user.value = data.user;
}

fetchUserData(); // Appelez la fonction pour récupérer les données de l'utilisateur au démarrage

supabase.auth.onAuthStateChange((evt, session) => {
    user.value = session?.user ?? null;
});

export { user }; // Exportez user si vous avez besoin d'y accéder depuis d'autres modules