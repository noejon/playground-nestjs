import { Injectable } from '@nestjs/common';
import { Player, Position } from 'src/types/Player';

@Injectable()
export class PlayersService {
  private players: Player[] = [
    {
      id: 1,
      name: 'Bernard Lama',
      email: 'bernard.lama@example.com',
      position: 'GOALKEEPER',
    },
    {
      id: 2,
      name: 'Fabien Barthez',
      email: 'fabien.barthez@example.com',
      position: 'GOALKEEPER',
    },
    {
      id: 3,
      name: 'Lionel Charbonnier',
      email: 'lionel.charbonnier@example.com',
      position: 'GOALKEEPER',
    },
    {
      id: 4,
      name: 'Vincent Candela',
      email: 'vincent.candela@example.com',
      position: 'DEFENDER',
    },
    {
      id: 5,
      name: 'Bixente Lizarazu',
      email: 'bixente.lizarazu@example.com',
      position: 'DEFENDER',
    },
    {
      id: 6,
      name: 'Laurent Blanc',
      email: 'laurent.blanc@example.com',
      position: 'DEFENDER',
    },
    {
      id: 7,
      name: 'Marcel Desailly',
      email: 'marcel.desailly@example.com',
      position: 'DEFENDER',
    },
    {
      id: 8,
      name: 'Lilian Thuram',
      email: 'lilian.thuram@example.com',
      position: 'DEFENDER',
    },
    {
      id: 9,
      name: 'Frank Leboeuf',
      email: 'frank.leboeuf@example.com',
      position: 'DEFENDER',
    },
    {
      id: 10,
      name: 'Patrick Vieira',
      email: 'patrick.vieira@example.com',
      position: 'MIDFIELDER',
    },
    {
      id: 11,
      name: 'Youri Djorkaeff',
      email: 'youri.djorkaeff@example.com',
      position: 'MIDFIELDER',
    },
    {
      id: 12,
      name: 'Didier Deschamps',
      email: 'didier.deschamps@example.com',
      position: 'MIDFIELDER',
    },
    {
      id: 13,
      name: 'Zinédine Zidane',
      email: 'zinedine.zidane@example.com',
      position: 'MIDFIELDER',
    },
    {
      id: 14,
      name: 'Robert Pirès',
      email: 'robert.pires@example.com',
      position: 'MIDFIELDER',
    },
    {
      id: 15,
      name: 'Bernard Diomède',
      email: 'bernard.diomede@example.com',
      position: 'MIDFIELDER',
    },
    {
      id: 16,
      name: 'Alain Boghossian',
      email: 'alain.boghossian@example.com',
      position: 'MIDFIELDER',
    },
    {
      id: 17,
      name: 'Emmanuel Petit',
      email: 'emmanuel.petit@example.com',
      position: 'MIDFIELDER',
    },
    {
      id: 18,
      name: 'Christian Karembeu',
      email: 'christian.karembeu@example.com',
      position: 'MIDFIELDER',
    },
    {
      id: 19,
      name: "Stéphane Guivarc'h",
      email: 'stephane.guivarch@example.com',
      position: 'FORWARD',
    },
    {
      id: 20,
      name: 'Thierry Henry',
      email: 'thierry.henry@example.com',
      position: 'FORWARD',
    },
    {
      id: 21,
      name: 'Christophe Dugarry',
      email: 'christophe.dugarry@example.com',
      position: 'FORWARD',
    },
    {
      id: 22,
      name: 'David Trezeguet',
      email: 'david.trezeguet@example.com',
      position: 'FORWARD',
    },
  ];

  findAll(position?: Position) {
    return this.players.filter((player) => player.position === position);
  }

  findOne(id: number) {
    return this.players.find((player) => player.id === id);
  }

  create(player: Omit<Player, 'id'>) {
    const [{ id }] = this.players.sort((a, b) => b.id - a.id);
    const newPlayer = {
      id: id + 1,
      ...player,
    };
    this.players.push(newPlayer);
    return newPlayer;
  }

  update(id: number, updatedPlayer: Partial<Omit<Player, 'id'>>) {
    const indexToUpdate = this.players.findIndex((player) => player.id === id);
    this.players[indexToUpdate] = {
      ...this.players[indexToUpdate],
      ...updatedPlayer,
    };
    return this.players[indexToUpdate];
  }

  delete(id: number) {
    const deletedPlayer = {
      ...this.players.find((player) => player.id === id),
    };
    this.players = this.players.filter((player) => player.id !== id);
    return deletedPlayer;
  }
}
