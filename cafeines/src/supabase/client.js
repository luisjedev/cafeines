import {createClient} from '@supabase/supabase-js'

export const client = createClient(
    process.env.REACT_APP_API_URL, 
    process.env.REACT_APP_API_KEY
);