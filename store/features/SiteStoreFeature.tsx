import create from "zustand";

interface SiteState {
  title: string;
  setTitle: (title: string) => void;

  loading: boolean;
  setLoading: (loading: boolean) => void;

  error: any;
  setError: (error: any) => void;
}

export const useSiteStore = create<SiteState>((set) => ({
  title: "Home",
  setTitle: (title: string) =>
    set({
      title,
    }),

  loading: true,
  setLoading: (loading: boolean) =>
    set({
      loading,
    }),

  error: null,
  setError: (error: any) => set((state) => ({ ...state, error })),
}));
