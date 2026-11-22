import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

// Substitua pelas suas chaves (Project Settings > API)
const supabaseUrl = 'https://nouthlsbjfilrqfqlpfi.supabase.co';
const supabaseKey = 'sb_publishable_OMMMa6RDFrjdBjxD6JtHDw_yB7ijgX-';

export const supabase = createClient(supabaseUrl, supabaseKey);