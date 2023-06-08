import {create} from 'zustand'

export const useIdTorneoStore = create((set) => ({
    idTorneo: '',
    setIdTorneo: (id) => set({idTorneo: id})
}))
