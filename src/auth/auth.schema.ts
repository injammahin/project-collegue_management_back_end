import { Prop, Schema } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Auth {
  @Prop()
  username: string;
  @Prop()
  email: string;
  @Prop()
  password: string;
}
