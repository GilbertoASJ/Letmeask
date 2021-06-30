import { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { Button } from '../components/Button'
import { database } from '../services/firebase';

import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'

import '../styles/auth.scss'

export function NewRoom() {

	const { user, signInWithGoogle } = useAuth();

	const [newRoom, setNewRoom] = useState('');

	const history = useHistory();

	async function handleCreateRoom(event: FormEvent) {

		event.preventDefault();

		if(newRoom.trim() == '') {
			return;
		}

		// Criando seção dentro do banco de dados
		const roomRef = database.ref('rooms')

		// Populando 'rooms', com informações sobre a nova sala
		const firebaseRoom = await roomRef.push({
			title: newRoom,
			authorId: user?.id,
		})

		history.push(`/admin/rooms/${firebaseRoom.key}`)
	}

	return (
		<div id="page-auth">
			<aside>
				<img src={illustrationImg} alt="Imagem de ilustração que simboliza perguntas e respostas" />
				<strong>Crie salas de Q&amp;A ao-vivo</strong>
				<p>Tire as dúvidas da sua audiência em tempo real.</p>
			</aside>

			<main>
				<div className="main-content">
					<img src={logoImg} alt="Let me ask Logo" />
					
					<h2>Criar uma nova sala</h2>
					<form onSubmit={handleCreateRoom}>
						
						<input 
							type="text" 
							placeholder="Nome da sala"
							onChange={event => setNewRoom(event.target.value)} 
							value={newRoom}
						/>
						<Button type="submit">
							Criar sala
						</Button>
					</form>

					<p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
				</div>
			</main>
		</div>
	)
}