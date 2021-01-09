import _ from 'lodash'
import APIConfig from 'common/Config/APIConfig';
import socketIOClient from 'socket.io-client'

class SocketManager {
  
  static default: SocketManager = new SocketManager()
  socket?: SocketIOClient.Socket

  private constructor() { }

  initializeSocket() {
    if (this.socket) {
      this.socket!.disconnect()
    }
    this.socket = socketIOClient(APIConfig.hotel.hotelListSocket,  {
      transportOptions: {
        polling: {
        }
      }
    })
  }
}

export default SocketManager