import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
} from "sequelize-typescript";
import Role from "./Role";

@Table({
  timestamps: true,
  tableName: "users",
  modelName: "User",
})
class User extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
  })
  declare firstName: string;

  @Column({
    type: DataType.STRING,
  })
  declare lastName: string;

  @Column({
    type: DataType.STRING,
  })
  declare email: string;

  @Column({
    type: DataType.INTEGER,
  })
  declare roleId: number;

  @BelongsTo(() => Role, {
    foreignKey: "roleId",
  })
  declare role: Role;

  @CreatedAt
  declare createdAt: Date;

  @UpdatedAt
  declare updatedAt: Date;
}

export default User;
