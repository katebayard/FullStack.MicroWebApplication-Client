export class Channel {
  id: number;
  channelName: string;
  users = [];

  constructor(){
    this.users = [];
  }
}
