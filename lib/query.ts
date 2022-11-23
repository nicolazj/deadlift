import { useQuery } from '@tanstack/react-query';
import { supabase } from './supabase';

export let useMaxWeightQuery = () =>
  useQuery({
    queryKey: ['max-weight'],
    queryFn: async () => {
      let { data, error } = await supabase.rpc('max_weight');

      return data as any as number;
    },
  });

export let useMaxTotalWeightOfTheWeekQuery = () =>
  useQuery({
    queryKey: ['max_total_weight_of_the_week'],
    queryFn: async () => {
      let { data, error } = await supabase.rpc('max_total_weight_of_the_week');

      return data;
    },
  });

export let useTotalWeightInPast7DaysQuery = () =>
  useQuery({
    queryKey: ['total_weights_in_past_7days'],
    queryFn: async () => {
      let { data, error } = await supabase.rpc('total_weights_in_past_7days');
      return data;
    },
  });
