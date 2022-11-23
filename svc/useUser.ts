import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { User } from '@supabase/supabase-js';

export let useUser = () => {
  const [user, setUser] = useState<User | undefined>();
  useEffect(() => {
    let loadUser = async () => {
      try {
        let {
          data: { user },
          error,
        } = await supabase.auth.getUser();
        if (error) throw error;
        console.log({ user });
        setUser(user);
      } catch (err) {
        console.error(err);
        let uniqueId =
          Date.now().toString(36) + Math.random().toString(36).substring(2);
        let { data: user, error } = await supabase.auth.signUp({
          email: `${uniqueId}@mailinator.com`,
          password: 'Password01!',
        });
        if (error) throw error;
        console.log(user);
        if (user) setUser(user.user);
      }
    };

    loadUser();
  }, []);

  return user;
};
