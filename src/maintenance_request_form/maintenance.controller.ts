/* The MaintenanceController class handles HTTP requests related to maintenance requests, including
creating, updating, and deleting maintenance requests. */
/* The MaintenanceController class is responsible for handling HTTP requests related to maintenance
requests, including creating, updating, and deleting maintenance requests. */
// src/service-request.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { Maintenance } from './maintetance.entity';
import { MaintenanceRequestService } from './maintenance.service';
import { maintenanceAuthService } from './maintenance.auth';
import { MaintenanceDto } from 'src/dto/maintenance.dto';
import { UpdateMaintenanceDto } from 'src/dto/update.maintenance.dto';
@Controller('maintaintance')
export class MaintenanceController {
  constructor(
    private readonly MaintenanceRequestService: MaintenanceRequestService,
    private maintenanceAuthService: maintenanceAuthService,
  ) {}

  @Post('/fillup')
  async createUser(@Body() body: MaintenanceDto) {
    const request = await this.maintenanceAuthService.fillup(
      ////////////////////////////////* part -1 *////////////////////////,
      body.requestNumber,
      body.subofChange,
      body.requestedBy,
      body.date,
      body.requesterName,
      body.EmployeeId,
      body.department,
      body.contractNo,
      body.MaintenanceType,
      body.purposeOfActivity,
      body.referenceServiceRequest,
      body.priority,
      body.impactLevel,
      body.requiredDowntime,
      body.mentionDowntime,
      body.startDate,
      body.startTime,
      body.endDate,
      body.endTime,
      ////////////////////////////////* part -2 *////////////////////////////////
      body.changeLocation,
      body.targetedSystemFor,
      body.IPaddress,
      body.ImpactedSystemform,
      body.DetailedDescriptionOfChange,
      body.DetailedWorkedPlanTask,
      body.DetailedWorkedPlanStartTime,
      body.DetailedWorkedPlanEndTime,
      body.RequirementTools,
      body.Implementationteam,
      body.Communication,
      body.RollBackPlan,
      body.checklistStatusOne,
      body.checklistStatusTwo,
      body.checklistStatusThree,
      body.checklistStatusFour,
      ////////////////////////////////* part -3 *////////////////////////////////
      body.ImpactedSystemfor,
      body.ActualPriority,
      body.Actualimpactlevel,
      ////////////////////////////////* part -4 *////////////////////////////////
      body.ExecusionTeamMenbers,
      body.ExecusionTeamleaders,
      ////////////////////////////////* part -5 *////////////////////////////////
      body.ChangeReviewForperformed,
      body.ChangeReviewForSuccess,
      body.ActualDowntime,
      body.WorkExecutionStatus,
      ////////////////////////// * for audit purpose *//////////////////////////////////////

      body.user,
    );
    console.log(body);
    return request;
  }

  /* The `@Get()` decorator is used to specify the HTTP method and route for retrieving all maintenance
 requests. It indicates that this route will handle GET requests without any parameters in the URL. */
  @Get()
  findAll() {
    return this.MaintenanceRequestService.findAll();
  }
  /* The `@Put('/:id')` decorator is used to specify the HTTP method and route for updating a
 maintenance request. It indicates that this route will handle PUT requests with a parameter `id` in
 the URL. */
  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateMaintenanceDto) {
    return this.MaintenanceRequestService.update(parseInt(id), body);
  }

  /* The `@Delete('/:id')` decorator is used to specify the HTTP method and route for deleting a
 maintenance request. It indicates that this route will handle DELETE requests with a parameter `id`
 in the URL. */
  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.MaintenanceRequestService.remove(parseInt(id));
  }
  ///////////////////////////?
  @Get('/released')
  findAllreleasedForm() {
    return this.MaintenanceRequestService.findAllreleasedForm();
  }

  @Patch('/approve/:id')
  approve(@Param('id') id: number) {
    return this.MaintenanceRequestService.approve(id);
  }

  @Patch('/decline/:id')
  decline(@Param('id') id: number) {
    return this.MaintenanceRequestService.decline(id);
  }
  @Patch('/revision/:id')
  revision(@Param('id') id: number) {
    return this.MaintenanceRequestService.revision(id);
  }
  ////
  // @Get('/it-department')
  // getITDepartmentRequests() {
  //   return this.serviceRequestService.findAllFromAlternativeChannelsDepartment();
  // }

  @Patch('/release/:id')
  releaseRequest(@Param('id') id: number) {
    return this.MaintenanceRequestService.releaseRequest(id);
  }

  @Patch('/block/:id')
  blockRequest(@Param('id') id: number) {
    return this.MaintenanceRequestService.blockRequest(id);
  }
  ////////////////////////////////////////////////////////////////
  @Get('/approved')
  findAllApproved() {
    return this.MaintenanceRequestService.findAllApproved();
  }

  @Patch('/approved/:id')
  approveed(@Param('id') id: number) {
    return this.MaintenanceRequestService.approveed(id);
  }

  @Patch('/reject/:id')
  reject(@Param('id') id: number) {
    return this.MaintenanceRequestService.reject(id);
  }
  @Get('/confirm')
  findFinalApproved() {
    return this.MaintenanceRequestService.findFinalApproved();
  }

  @Patch('/confirm/:id')
  confirm(@Param('id') id: number) {
    return this.MaintenanceRequestService.confirm(id);
  }

  @Patch('/cancel/:id')
  cancel(@Param('id') id: number) {
    return this.MaintenanceRequestService.cancel(id);
  }
  //find by department name
  ////////////////////////////////
  @Get('/Alternative-Channels') //done
  getAlternativeChannelsDepartmentRequests() {
    return this.MaintenanceRequestService.findAllFromAlternativeChannelsDepartment();
  }
  @Get('/ApplicationUser-Management')
  getApplicationUserManagementDepartmentRequests() {
    return this.MaintenanceRequestService.findAllFromApplicationUserManagementDepartment();
  }
  @Get('/CardsAndATMSystem')
  getCardsAndATMSystemDepartmentRequests() {
    return this.MaintenanceRequestService.findAllFromCardsAndATMSystemDepartment();
  }
  @Get('/CorporateApplication')
  getCorporateApplicationDepartmentRequests() {
    return this.MaintenanceRequestService.findAllFromCorporateApplicationDepartment();
  }
  @Get('/DataCenterManagement')
  getDataCenterManagementDepartmentRequests() {
    return this.MaintenanceRequestService.findAllFromDataCenterManagementDepartment();
  }
  @Get('/DataCenterPassiveInfrastructure')
  getDataCenterPassiveInfrastructureDepartmentRequests() {
    return this.MaintenanceRequestService.findAllFromDataCenterPassiveInfrastructureDepartment();
  }
  @Get('/DatabaseAdministration')
  getDatabaseAdministrationDepartmentRequests() {
    return this.MaintenanceRequestService.findAllFromDatabaseAdministrationDepartment();
  }
  @Get('/ITSecurityAndCompliance')
  getITSecurityAndComplianceDepartmentRequests() {
    return this.MaintenanceRequestService.findAllITSecurityAndComplianceDepartment();
  }
  @Get('/MiddlewareAdministration')
  getMiddlewareAdministrationDepartmentRequests() {
    return this.MaintenanceRequestService.findAllFromMiddlewareAdministrationDepartment();
  }
  @Get('/MISAndDataSupport')
  getMISAndDataSupportDepartmentRequests() {
    return this.MaintenanceRequestService.findAllFromMISAndDataSupportDepartment();
  }
  @Get('/NetworkManagement')
  getNetworkManagementDepartmentRequests() {
    return this.MaintenanceRequestService.findAllFromNetworkManagementDepartment();
  }
  @Get('/HelpDesk')
  getHelpDeskDepartmentRequests() {
    return this.MaintenanceRequestService.findAllFromHelpDeskDepartment();
  }
  @Get('/InitiativesAndProjects')
  getInitiativesAndProjectsDepartmentRequests() {
    return this.MaintenanceRequestService.findAllNewInitiativesAndProjectsDepartment();
  }
  @Get('/ProcurementzzAndAssetManagement')
  getProcurementzzAndAssetManagementDepartmentRequests() {
    return this.MaintenanceRequestService.findAllFromProcurementzzAndAssetManagementDepartment();
  }
  @Get('/RetailApplication')
  getRetailApplicationDepartmentRequests() {
    return this.MaintenanceRequestService.findAllFromRetailApplicationDepartment();
  }
  @Get('/ServerAndStorageManagement')
  getServerAndStorageManagementDepartmentRequests() {
    return this.MaintenanceRequestService.findAllFromServerAndStorageManagementDepartment();
  }
  @Get('/WindowsSystemManagement')
  getWindowsSystemManagementDepartmentRequests() {
    return this.MaintenanceRequestService.findAllFromWindowsSystemManagementDepartment();
  }
  @Get('/Swift')
  getSwiftDepartmentRequests() {
    return this.MaintenanceRequestService.findAllFromSwiftDepartment();
  }
  // @Get('/by-user/:requestedBy')
  // findRequestsByUser(@Param('requestedBy') requestedBy: string) {
  //   return this.MaintenanceRequestService.findRequestsByUser(requestedBy);
  // }
  // @Get('/request-nos')
  // async getAllRequestNos(): Promise<string[]> {
  //   return this.MaintenanceRequestService.findAllRequestNos();
  // }
}
