// src/controllers/user.controller.ts
import { Controller, Get } from '@nestjs/common';
import { RoleService } from './role.service';

@Controller('users')
export class RoleController {
  constructor(private readonly userService: RoleService) {}

  @Get('all-roles')
  async getAllRoles(): Promise<{
    superadmin: string[];
    ciso: string[];
    subadmin: string[];
    head: string[];
  }> {
    const adminNames = await this.userService.getUsersByRole('superadmin');
    const cisoNames = await this.userService.getUsersByRole('ciso');
    const subadminNames = await this.userService.getUsersByRole('subadmin');
    const headNames = await this.userService.getUsersByRole('head');

    return {
      superadmin: adminNames.map((admin) => admin.employee_name),
      ciso: cisoNames.map((ciso) => ciso.employee_name),
      subadmin: subadminNames.map((subadmin) => subadmin.employee_name),
      head: headNames.map((head) => head.employee_name),
    };
  }
}
