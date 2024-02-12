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
import { ServiceRequest } from './service-request.entity';
import { ServiceRequestService } from './service-request.service';
import { ServiceAuthService } from './service-request.auth';
import { ServiceRequestDto } from 'src/dto/service-request.dto';
import { UpdateRequestDto } from 'src/dto/update-request.dto';
@Controller('service-requests')
export class ServiceRequestController {
  constructor(
    private readonly serviceRequestService: ServiceRequestService,
    private ServiceAuthService: ServiceAuthService,
  ) {}

  @Post('/fillup')
  async createUser(@Body() body: ServiceRequestDto) {
    const request = await this.ServiceAuthService.fillup(
      body.requestNo,

      body.requestedBy,

      body.department,

      body.designation,

      body.date,

      body.requestFor,

      body.employeeId,

      body.reasonOfRequest,

      body.serviceDetails,
      body.submissionDateTime,
      body.user,
      body.accessTimeDuration,
      body.accessDateDuration,
      body.execusion,
      body.vandorName,
      body.vandorAssignedReason,
      body.deviceRequired,
      body.WorkTeamWithId,
      body.readBy,
      body.ReturnTimeDate,
      body.revokeBy,
      body.deviceApprovedBy,
    );
    console.log(body);

    return request;
  }

  @Get()
  findAll() {
    return this.serviceRequestService.findAll();
  }
  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateRequestDto) {
    return this.serviceRequestService.update(parseInt(id), body);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.serviceRequestService.remove(parseInt(id));
  }
  // @Get('/pending')
  // async getPendingServiceRequests() {
  //   return this.serviceRequestService.findAll();
  // }

  // @Patch('/approve/:id')
  // async approveServiceRequest(@Param('id') id: number) {
  //   return this.serviceRequestService.approve(id, 'Approved');
  // }
  // @Patch('/decline/:id')
  // async declineServiceRequest(@Param('id') id: number) {
  //   return this.serviceRequestService.updateApprovalStatus(id, 'Declined');
  // }
  // @Patch('/revision/:id')
  // async revisionServiceRequest(@Param('id') id: number) {
  //   return this.serviceRequestService.updateApprovalStatus(id, 'Revision');
  // }
  //////////

  @Get('/released')
  findAllreleasedForm() {
    return this.serviceRequestService.findAllreleasedForm();
  }

  @Patch('/approve/:id')
  approve(@Param('id') id: number) {
    return this.serviceRequestService.approve(id);
  }

  @Patch('/decline/:id')
  decline(@Param('id') id: number) {
    return this.serviceRequestService.decline(id);
  }
  @Patch('/revision/:id')
  revision(@Param('id') id: number) {
    return this.serviceRequestService.revision(id);
  }
  ////
  // @Get('/it-department')
  // getITDepartmentRequests() {
  //   return this.serviceRequestService.findAllFromAlternativeChannelsDepartment();
  // }

  @Patch('/release/:id')
  releaseRequest(@Param('id') id: number) {
    return this.serviceRequestService.releaseRequest(id);
  }

  @Patch('/block/:id')
  blockRequest(@Param('id') id: number) {
    return this.serviceRequestService.blockRequest(id);
  }
  ////////////////////////////////////////////////////////////////
  @Get('/approved')
  findAllApproved() {
    return this.serviceRequestService.findAllApproved();
  }

  @Patch('/approved/:id')
  approveed(@Param('id') id: number) {
    return this.serviceRequestService.approveed(id);
  }

  @Patch('/reject/:id')
  reject(@Param('id') id: number) {
    return this.serviceRequestService.reject(id);
  }
  @Get('/confirm')
  findFinalApproved() {
    return this.serviceRequestService.findFinalApproved();
  }

  @Patch('/confirm/:id')
  confirm(@Param('id') id: number) {
    return this.serviceRequestService.confirm(id);
  }

  @Patch('/cancel/:id')
  cancel(@Param('id') id: number) {
    return this.serviceRequestService.cancel(id);
  }
  //find by department name
  ////////////////////////////////
  @Get('/Alternative-Channels') //done
  getAlternativeChannelsDepartmentRequests() {
    return this.serviceRequestService.findAllFromAlternativeChannelsDepartment();
  }
  @Get('/ApplicationUser-Management')
  getApplicationUserManagementDepartmentRequests() {
    return this.serviceRequestService.findAllFromApplicationUserManagementDepartment();
  }
  @Get('/CardsAndATMSystem')
  getCardsAndATMSystemDepartmentRequests() {
    return this.serviceRequestService.findAllFromCardsAndATMSystemDepartment();
  }
  @Get('/CorporateApplication')
  getCorporateApplicationDepartmentRequests() {
    return this.serviceRequestService.findAllFromCorporateApplicationDepartment();
  }
  @Get('/DataCenterManagement')
  getDataCenterManagementDepartmentRequests() {
    return this.serviceRequestService.findAllFromDataCenterManagementDepartment();
  }
  @Get('/DataCenterPassiveInfrastructure')
  getDataCenterPassiveInfrastructureDepartmentRequests() {
    return this.serviceRequestService.findAllFromDataCenterPassiveInfrastructureDepartment();
  }
  @Get('/DatabaseAdministration')
  getDatabaseAdministrationDepartmentRequests() {
    return this.serviceRequestService.findAllFromDatabaseAdministrationDepartment();
  }
  @Get('/ITSecurityAndCompliance')
  getITSecurityAndComplianceDepartmentRequests() {
    return this.serviceRequestService.findAllITSecurityAndComplianceDepartment();
  }
  @Get('/MiddlewareAdministration')
  getMiddlewareAdministrationDepartmentRequests() {
    return this.serviceRequestService.findAllFromMiddlewareAdministrationDepartment();
  }
  @Get('/MISAndDataSupport')
  getMISAndDataSupportDepartmentRequests() {
    return this.serviceRequestService.findAllFromMISAndDataSupportDepartment();
  }
  @Get('/NetworkManagement')
  getNetworkManagementDepartmentRequests() {
    return this.serviceRequestService.findAllFromNetworkManagementDepartment();
  }
  @Get('/HelpDesk')
  getHelpDeskDepartmentRequests() {
    return this.serviceRequestService.findAllFromHelpDeskDepartment();
  }
  @Get('/InitiativesAndProjects')
  getInitiativesAndProjectsDepartmentRequests() {
    return this.serviceRequestService.findAllNewInitiativesAndProjectsDepartment();
  }
  @Get('/ProcurementzzAndAssetManagement')
  getProcurementzzAndAssetManagementDepartmentRequests() {
    return this.serviceRequestService.findAllFromProcurementzzAndAssetManagementDepartment();
  }
  @Get('/RetailApplication')
  getRetailApplicationDepartmentRequests() {
    return this.serviceRequestService.findAllFromRetailApplicationDepartment();
  }
  @Get('/ServerAndStorageManagement')
  getServerAndStorageManagementDepartmentRequests() {
    return this.serviceRequestService.findAllFromServerAndStorageManagementDepartment();
  }
  @Get('/WindowsSystemManagement')
  getWindowsSystemManagementDepartmentRequests() {
    return this.serviceRequestService.findAllFromWindowsSystemManagementDepartment();
  }
  @Get('/Swift')
  getSwiftDepartmentRequests() {
    return this.serviceRequestService.findAllFromSwiftDepartment();
  }
  @Get('/by-user/:requestedBy')
  findRequestsByUser(@Param('requestedBy') requestedBy: string) {
    return this.serviceRequestService.findRequestsByUser(requestedBy);
  }
  @Get('/request-nos')
  async getAllRequestNos(): Promise<string[]> {
    return this.serviceRequestService.findAllRequestNos();
  }
}
