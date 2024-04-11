import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { RegisterRequest } from '../register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model: RegisterRequest = {
    username: '',
    email: '',
    password: '',
    role: 'USER' // Asumiendo que tienes un rol por defecto. Ajusta según sea necesario.
  };

  constructor(private authService: AuthService) {}

  register(): void {
    this.authService.register(this.model).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        // Aquí podrías redirigir al usuario o mostrar un mensaje de éxito
      },
      error: (error) => {
        console.error('Registration failed', error);
        // Manejo de errores, por ejemplo, mostrar un mensaje al usuario
      }
    });
  }
}
