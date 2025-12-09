import { Injectable } from "@angular/core";

interface Toast {
  id: number
  title: string
  description: string
  type: 'succes' | 'error' | 'message' | 'warning'
  time?: number
}

@Injectable({
    providedIn: 'root'

})

export class ToastService{
    
toasts: Toast[] = [] as Toast[]
  id: number = 0

  addToast(
    title: string,
    description: string,
    type: 'succes' | 'error' | 'message' | 'warning',
    time: number,
  ) {
    let id = this.id
    const toast = { id, title, description, type }
    this.toasts.push(toast)
    this.id++

    this.timeOutToast(id, time)
  }

  removeToast(id: number) {
    const t = document.getElementById('toast-' + id)
    t?.classList.add('toast-anim')

    setTimeout(() => {
      this.toasts = this.toasts.filter((e) => e.id !== id)
    }, 1000)
  }

  timeOutToast(id: number, time: number) {
    setTimeout(() => {
      this.removeToast(id)
    }, time)
  }


}