package org.generation.happytingkat.controller;

import org.generation.happytingkat.repository.entity.Package;
import org.generation.happytingkat.service.PackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/package")
public class PackageController {

    final PackageService packageService;

    public PackageController(@Autowired PackageService packageService)
    {
        this.packageService = packageService;
    }

    @CrossOrigin
    @GetMapping("/all")
    public Iterable<Package> getPackages()
    {
        return packageService.all();
    }

    @CrossOrigin
    @GetMapping("{id}")
    public Package findPackageById(@PathVariable Integer id)
    {
        return packageService.findById(id);
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public void delete (@PathVariable Integer id)
    {
        packageService.delete(id);
    }

}

